import { Stack, Box, Text } from "@chakra-ui/react";
import { TaskItem } from "./TaskItem";
import type { Task } from "../types/task";

interface Props {
   tasks: Task[];
   onUpdate: (id: string, status: Task["status"]) => void;
   onDelete: (id: string) => void;
   isDeleting: boolean;
}

export function TaskList({ tasks, onUpdate, onDelete, isDeleting }: Props) {
   if (tasks.length === 0) {
      return <Text color="gray.500">Nessun task</Text>;
   }

   return (
      <Stack>
         {tasks.map((task) => (
            <Box key={task.id} p={3} borderWidth="1px" rounded="md">
               <TaskItem
                  task={task}
                  onStatusChange={(status) => onUpdate(task.id, status)}
                  onDelete={() => onDelete(task.id)}
                  isDeleting={isDeleting}
               />
            </Box>
         ))}
      </Stack>
   );
}
