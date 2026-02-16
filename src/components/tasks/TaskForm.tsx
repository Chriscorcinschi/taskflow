import { Button, Input, HStack } from "@chakra-ui/react";
import { useState } from "react";
import type { Task } from "../../types/task";

interface Props {
   onAdd: (payload: Task["title"]) => void;
   isLoading?: boolean;
}

export function TaskForm({ onAdd, isLoading }: Props) {
   const [title, setTitle] = useState("");

   const handleSubmit = async () => {
      if (!title.trim()) {
         alert("Enter a title for the task");
         return;
      }
      try {
         await onAdd(title);
         setTitle("");
      } catch (error) {
         console.log("Error adding task:", error);
      }
   };
   return (
      <HStack>
         <Input
            placeholder="New task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
         />
         <Button
            colorScheme="green"
            onClick={handleSubmit}
            loading={isLoading}
            disabled={!title.trim()}
         >
            Add
         </Button>
      </HStack>
   );
}
