import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useTasks } from "../features/tasks/useTasks";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";

export function DashboardPage() {
   const {
      data,
      isLoading,
      createTask,
      updateTask,
      deleteTask,
      isCreating,
      isDeleting,
      error,
   } = useTasks();

   if (error) {
      console.log("Error loading tasks:", error);
      return <p>Error loading tasks: {error.message}</p>;
   }

   if (isLoading) return <p>Loading tasks...</p>;

   return (
      <Stack maxW="xl" mx="auto" p={4}>
         <Heading size="lg">Tasks</Heading>

         <TaskForm onAdd={createTask} isLoading={isCreating} />

         <Box mt={4}>
            {data && data.length === 0 ? (
               <Text>No tasks available</Text>
            ) : (
               <TaskList
                  tasks={data || []}
                  onUpdate={(id, status) => updateTask({ id, status })}
                  onDelete={deleteTask}
                  isDeleting={isDeleting}
               />
            )}
         </Box>
      </Stack>
   );
}
