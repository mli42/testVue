<template>
  <div>
    <form>
      <div>
        <label for="action">Action:</label>
        <br>
        <input type="text" id="action" v-model="newTask">
      </div>
      <button class="add-task"
      @click.prevent="addNewTask">Submit new task</button>
    </form>

    <ul>
      <li class="task-elem" v-for="(task, index) in tasks" :key="index">
        <p style="margin-left: 5px;">{{printTask(task)}}</p>
        <button class="del-task" @click="tasks.splice(index, 1)">X</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Todo',
  data() {
    return {
      newTask: '' as string,
      tasks: ["lol", "mdr"] as string[],
    };
  },
  methods: {
    printTask(task: string): string {
      const max_length: number = 10;

      if (task.length <= max_length)
        return task;
      return task.substr(0, max_length - 3) + "...";
    },
    addNewTask() {
      const _this: any = this;

      if (_this.newTask.length == 0)
        return ;
      _this.tasks.push(_this.newTask);
      _this.newTask = '';
    }
  },
}
</script>

<style scoped src="./Todo.css">
</style>
