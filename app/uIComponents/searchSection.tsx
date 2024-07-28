"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usePostContext } from "../context/posts/usePostContext";
import { Filter } from "lucide-react";

type Inputs = {
  searchKey: string;
};

const SearchSection = () => {
  // context
  const { filterPostsHandler, filterKey, clearFilterHandler, isFilterApplied } =
    usePostContext();

  // schema
  const formSchema = z.object({
    searchKey: z
      .string()
      .min(2, {
        message: "Search term is required",
      })
      .regex(/^[a-zA-Z ]+$/, {
        message: "Only letters are allowed",
      }),
  });

  // hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchKey: filterKey,
    },
  });

  const isValid = form.formState.isValid;
  const isDirty = form.formState.isDirty;

  // effect
  useEffect(() => {
    // at initial and during filterkey change this'll reset the form
    form.reset({
      searchKey: filterKey,
    });
  }, [filterKey, form]);

  // state
  const [openSearch, setopenSearch] = useState(false);

  // handler
  const onSubmit = (data: Inputs) => {
    filterPostsHandler(data.searchKey);
    setopenSearch(false);
  };

  const onClear = () => {
    clearFilterHandler();
    setopenSearch(false);
  };

  return (
    <div className="relative">
      {isFilterApplied && <Filter className="absolute -top-4 right-0 w-2" />}
      <Image
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/search.png`}
        alt="search-icon"
        width={20}
        height={20}
        onClick={() => setopenSearch(!openSearch)}
      />
      <Dialog open={openSearch} onOpenChange={() => setopenSearch(false)}>
        <DialogContent className="rounded-lg border-2 w-auto min-w-64 md:min-w-96 max-w-max">
          <DialogHeader>
            <DialogTitle>Search by name</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="text-center"
            >
              <FormField
                control={form.control}
                name="searchKey"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Type here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button
                type="submit"
                className={`p-2 text-black rounded-xl w-20 mt-3 ${
                  isValid && isDirty ? "bg-white" : "bg-slate-500"
                }`}
                disabled={!isValid && !isDirty}
              >
                Search
              </button>
              <button
                className={`p-2 text-black rounded-xl w-20 mt-3 ml-3 ${
                  isFilterApplied ? "bg-white" : "bg-slate-500"
                }`}
                onClick={onClear}
                disabled={!isFilterApplied}
              >
                Clear
              </button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchSection;
