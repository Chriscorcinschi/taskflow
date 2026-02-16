import {
   HStack,
   Text,
   IconButton,
   Menu,
   Badge,
   Portal,
} from "@chakra-ui/react";
import {
   taskStatusColors,
   taskStatusLabels,
   taskStatusOptions,
   type Task,
} from "../../types/task";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
   task: Task;
   onStatusChange: (status: Task["status"]) => void;
   onDelete: () => void;
   isDeleting: boolean;
}

export function TaskItem({
   task,
   onStatusChange,
   onDelete,
   isDeleting,
}: Props) {
   return (
      <HStack justify="space-between" w="100%">
         <Text>{task.title}</Text>
         <HStack>
            <Menu.Root>
               <Menu.Trigger>
                  <Badge
                     cursor={"pointer"}
                     colorPalette={taskStatusColors[task.status]}
                  >
                     {taskStatusLabels[task.status]}
                  </Badge>
               </Menu.Trigger>
               <Portal>
                  <Menu.Positioner>
                     <Menu.Content>
                        {taskStatusOptions.map((value) => (
                           <Menu.Item
                              onClick={() =>
                                 onStatusChange(value as Task["status"])
                              }
                              key={value}
                              value={value}
                           >
                              <Badge
                                 size="sm"
                                 colorPalette={taskStatusColors[value]}
                              >
                                 {taskStatusLabels[value]}
                              </Badge>
                           </Menu.Item>
                        ))}
                     </Menu.Content>
                  </Menu.Positioner>
               </Portal>
            </Menu.Root>
            <IconButton
               aria-label="Delete task"
               size="sm"
               variant="ghost"
               onClick={onDelete}
               loading={isDeleting}
            >
               <RiDeleteBinLine />
            </IconButton>
         </HStack>
      </HStack>
   );
}
