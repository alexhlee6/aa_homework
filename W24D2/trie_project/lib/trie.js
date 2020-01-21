class Node {
    constructor() {
        this.children = {}; // should look like {"a": Node, "b": Node}
        this.isTerminal = false;
    }
}

class Trie {
   constructor() {
       this.root = new Node();
   }

   insertRecur(word, root=this.root) {
       if (word.length === 0) return;
        let char = word[0];
        if (Object.keys(root.children).includes(char)) {
            let sliceWord = word.slice(1);
            this.insertRecur(sliceWord, root.children[char]);
        } else {
            root.children[char] = new Node();
            if (word.length === 1) {
                root.children[char].isTerminal = true;
            }
            this.insertRecur(word.slice(1), root.children[char]);
        }
   }

   insertIter(word) {
       let currNode = this.root;
       for (let i = 0; i < word.length; i++) {
           if (!Object.keys(currNode.children).includes(word[i])) {
                currNode.children[word[i]] = new Node();
                if (i === word.length - 1) {
                    currNode.children[word[i]].isTerminal = true;
                }
                currNode = currNode.children[word[i]];
           } else {
               currNode = currNode.children[word[i]];
           }
       }
   }

   searchRecur(word, root = this.root) {
       if (word.length === 1) {
            if (root.children[word[0]] && root.children[word[0]].isTerminal) {
                return true;
            }
            return false;
       }

        let char = word[0];
        if (Object.keys(root.children).includes(char)) {
            if (word.length === 1) return true;
            return this.searchRecur(word.slice(1), root.children[char]);
        } else {
            return false;
        }
   }

   searchIter(word) {
       let currNode = this.root;
       for (let i = 0; i < word.length; i++) {
           if (Object.keys(currNode.children).includes(word[i])) {
                currNode = currNode.children[word[i]];
           } else {
               return false;
           }
       }
       if (currNode.isTerminal) return true;
       return false;
   }

   wordsWithPrefix(prefix, root = this.root) {
       if (root.isTerminal) return "";
       
       
   }
}

module.exports = {
    Node,
    Trie
};