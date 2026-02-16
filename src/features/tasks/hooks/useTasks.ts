import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
   createTask,
   deleteTask,
   getTasks,
   updateTaskStatus,
} from "../api/tasks.api";
import type { TaskStatus } from "../types/task";

export function useTasks() {
   const queryClient = useQueryClient();

   const tasksQuery = useQuery({
      queryKey: ["tasks"],
      queryFn: getTasks,
   });

   const createMutation = useMutation({
      mutationFn: createTask,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
   });

   const updateMutation = useMutation({
      mutationFn: ({ id, status }: { id: string; status: TaskStatus }) =>
         updateTaskStatus(id, status),
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
   });

   const deleteMutation = useMutation({
      mutationFn: deleteTask,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["tasks"] });
      },
   });

   return {
      ...tasksQuery,
      createTask: createMutation.mutateAsync,
      updateTask: updateMutation.mutateAsync,
      deleteTask: deleteMutation.mutateAsync,

      isCreating: createMutation.isPending,
      isUpdating: updateMutation.isPending,
      isDeleting: deleteMutation.isPending,
   };
}
