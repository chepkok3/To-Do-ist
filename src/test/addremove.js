/* eslint-disable */
import itemsList from './createitems';

let list = JSON.parse(localStorage.getItem('list')) || [];

class ItemSaved {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  newItem(newToDo, includeItemsList = true) {
    this.description = newToDo;
    this.index = list.length + 1;
    list.push({
      description: this.description,
      completed: this.completed,
      index: this.index,
    });
    localStorage.setItem('list', JSON.stringify(list));
    if (includeItemsList) {
      itemsList(this, list.length + 1);
    }
  }

  // code for removing added task
  removeTask(index, includefunctionItem = true) {
    list = list.filter((element) => element.index !== index);
    localStorage.setItem('list', JSON.stringify(list));
    const taskList = document.querySelector('.task-list');
    this.indexUpdate();
    if (includefunctionItem) {
      taskList.innerHTML = '';
      this.showlist();
    }
  }

  // show tasks after deleting
  showlist = () => {
    list.forEach((itemObj, index) => {
      itemsList(itemObj, index + 1);
    });
    localStorage.setItem('list', JSON.stringify(list));
  };

  //  code for updating index
  indexUpdate = () => {
    list = list.map((element, index) => {
      element.index = index + 1;
      return element;
    });
    localStorage.setItem('list', JSON.stringify(list));
  };

  // code for editing tasks
  editItem = (id, text) => {
    list.forEach((element) => {
      if (element.index === id) {
        element.description = text;
      }
    });
    localStorage.setItem('list', JSON.stringify(list));
  };
}

export { list, ItemSaved };

/* eslint-enable */
