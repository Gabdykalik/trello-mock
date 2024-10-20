<template>
  <div class="flex overflow-x-auto gap-4 items-start board">
    <draggable
      v-model="columns"
      group="columns"
      item-key="id"
      :animation="150"
      handle=".drag-handle"
      class="flex gap-4 items-start"
    >
      <template #item="{ element: column }: { element: Column }"
        ><div class="bg-gray-200 rounded column min-w-[250px] p-5">
          <header class="font-bold mb-4">
            <DragHandle />
            <input
              type="text"
              class="bg-transparent focus:bg-white rounded px-1 w-4/5 title-input"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="
                column.title == ''
                  ? (columns = columns.filter((c) => c.id !== column.id))
                  : null
              "
              v-model="column.title"
            />
          </header>
          <draggable
            v-model="column.tasks"
            :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
            item-key="id"
            :animation="150"
            handle=".drag-handle"
          >
            <template #item="{ element: task }: { element: Task }">
              <div>
                <TrelloBoardTask
                  :task="task"
                  @delete="
                    column.tasks = column.tasks.filter((t) => t.id !== $event)
                  "
                />
              </div>
            </template>
          </draggable>
          <footer>
            <NewTask @add="column.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggable>
    <button
      @click="createColumn"
      class="bg-gray-200 whitespace-nowrap p-2 rounded opacity-50"
    >
      +Add Another Column
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Column, Task } from "~/types";
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
const columns = useLocalStorage<Column[]>("trelloBoard", [
  {
    id: nanoid(),
    title: "Hello World",
    tasks: [
      {
        id: nanoid(),
        title: "Create Trello Board Mock",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Develop Vue skills",
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        title: "Learn every day",
        createdAt: new Date(),
      },
    ],
  },
  {
    title: "Frontend",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "In progress",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "Processing",
    id: nanoid(),
    tasks: [],
  },
  {
    title: "Complete",
    id: nanoid(),
    tasks: [],
  },
]);
const alt = useKeyModifier("Alt");

function createColumn() {
  const column: Column = {
    id: nanoid(),
    title: "",
    tasks: [],
  };
  columns.value.push(column);
  nextTick(() => {
    (
      document.querySelector(
        ".column:last-of-type .title-input"
      ) as HTMLInputElement
    ).focus();
  });
}
</script>

<style lang="scss" scoped>
.board::-webkit-scrollbar {
  display: none;
}
</style>
