"use client";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

export const SocialSelector = ({
  onSelect,
}: {
  onSelect: (name: string, url: string) => void;
}) => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please enter a name");
      return;
    }
    if (!url) {
      toast.error("Please enter a valid URL");
      return;
    }
    if (
      !url.match(/^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+/) &&
      !url.match(/^https:\/\/(www\.)?twitter\.com\/in\/[a-zA-Z0-9_-]+/) &&
      !url.match(/^https:\/\/(www\.)?x\.com\/in\/[a-zA-Z0-9_-]+/)
    ) {
      toast.error("Please enter a valid LinkedIn or Twitter URL");
      return;
    }
    onSelect(name, url);
  };
  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col gap-2 items-center"
      >
        <Input
          className="bg-background/50"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          className="bg-background/50"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.linkedin.com/in/andritianaa/"
        />
        <Button className="w-full flex gap-2" type="submit">
          Submit
          <Check size={16} />
        </Button>
      </form>
      <p className="text-sm text-center font-light text-muted-foreground">
        Add a link to your linkedIn or Twitter
      </p>
    </div>
  );
};
