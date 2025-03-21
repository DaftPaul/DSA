class TrieNode {
  constructor() {
    this.end = false;
    this.keys = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, node = this.root) {
    if (word.length === 0) {
      node.end = true;
      return;
    } else if (!node.keys.has(word[0])) {
      node.keys.set(word[0], new TrieNode());
      this.insert(word.substring(1), node.keys.get(word[0]));
    } else {
      this.insert(word.substring(1), node.keys.get(word[0]));
    }
  }

  search(word, node = this.root) {
    if (word.length === 0 && node.end) {
      return true;
    } else if (word.length === 0) {
      return false;
    } else if (!node.keys.has(word[0])) {
      return false;
    } else {
      return this.search(word.substring(1), node.keys.get(word[0]));
    }
  }

  startsWith(prefix, node = this.root) {
    if (prefix.length === 0) {
      return true;
    } else if (!node.keys.has(prefix[0])) {
      return false;
    } else {
      return this.startsWith(prefix.substring(1), node.keys.get(prefix[0]));
    }
  }
}

// T complex: O(N)
// S complex: O(N) || O(L) where is the lenght of word

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("dog")); // false
trie.insert("dog");
console.log(trie.search("dog")); // true
console.log(trie.startsWith("app")); // true
console.log(trie.search("app")); // false
trie.insert("app");
console.log(trie.search("app")); // true
