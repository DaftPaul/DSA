class Person {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    this._persons = new Map([[this.king.name, this.king]]);
  }

  // T O(1)
  birth(childName, parentName) {
    const parent = this._persons.get(parentName);
    const newChild = new Person(childName);
    parent.children.push(newChild);
    this._persons.set(childName, newChild);
  }

  // T O(1)
  death(personName) {
    const person = this._persons.get(personName);
    if (person === undefined) return null;
    person.isAlive = false;
  }

  // T O(N)
  getOrderOfSuccession() {
    const order = [];
    this._DFS(this.king, order);
    return order;
  }

  _DFS(root, order) {
    if (root.isAlive) {
      order.push(root.name);
    }

    for (let i = 0; i < root.children.length; i++) {
      const curentChild = root.children[i];
      this._DFS(curentChild, order);
    }
  }
}

const monarchy = new Monarchy("Jake");
monarchy.birth("Cath", "Jake");
monarchy.birth("Jane", "Cath");
monarchy.birth("Farah", "Jane");
monarchy.birth("Tom", "Jake");
monarchy.birth("Celine", "Jake");
monarchy.birth("Mark", "Cath");
monarchy.birth("Peter", "Celine");

console.log(monarchy.getOrderOfSuccession());
// Array(8) [ 'Jake', 'Cath', 'Jane', 'Farah', 'Mark', 'Tom', 'Celine', 'Peter' ]
monarchy.death("Jake");
monarchy.death("Jane");
console.log(monarchy.getOrderOfSuccession());
// Array(6) [ 'Cath', 'Farah', 'Mark', 'Tom', 'Celine', 'Peter' ]
