import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form");
    if (form) {
      form.reset();
    }
  };
  return (
    <Button type="reset" onClick={reset} className="search-btn">
      <Link href="/">
        <X className="size-5" />
      </Link>
    </Button>
  );
};

export default SearchReset;
