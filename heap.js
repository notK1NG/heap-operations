// Define a class for MinHeap, representing a minimum binary heap
class MinHeap {
  constructor() {
    // Initialize the heap as an empty array
    this.heap = [];
  }

  // Get the parent index of the given index in the heap
  getParentIndex(index) {
    // Formula to calculate the parent index: (index - 1) / 2
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of the given index in the heap
  getLeftChildIndex(index) {
    // Formula to calculate the left child index: 2 * index + 1
    return 2 * index + 1;
  }

  // Get the right child index of the given index in the heap
  getRightChildIndex(index) {
    // Formula to calculate the right child index: 2 * index + 2
    return 2 * index + 2;
  }

  // Swap two elements in the heap by their indices
  swap(index1, index2) {
    // Destructure and swap the elements at index1 and index2
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Insert a new value into the heap
  insert(value) {
    // Push the new value to the end of the heap array
    this.heap.push(value);
    // Restore the heap property by moving the new value up
    this.heapifyUp();
  }

  // Restore the heap property by moving the last element up as necessary
  heapifyUp() {
    let index = this.heap.length - 1; // Start with the last element
    // While the current element is smaller than its parent, swap them
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] > this.heap[index]
    ) {
      this.swap(index, this.getParentIndex(index)); // Swap with parent
      index = this.getParentIndex(index); // Update index to parent's index
    }
  }

  // Remove and return the smallest element (root) of the heap
  extractMin() {
    if (this.heap.length === 0) return null; // If heap is empty, return null
    if (this.heap.length === 1) return this.heap.pop(); // If one element, pop and return it
    // Store the minimum value (root)
    const min = this.heap[0];
    // Replace root with the last element
    this.heap[0] = this.heap.pop();
    // Restore heap property by moving the root down
    this.heapifyDown();
    // Return the minimum value
    return min;
  }

  // Restore the heap property by moving the root element down as necessary
  heapifyDown() {
    let index = 0; // Start with the root element
    // While there is at least a left child
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallerChildIndex = this.getLeftChildIndex(index); // Assume left child is smaller
      // Check if right child exists and is smaller than left child
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] < this.heap[smallerChildIndex]
      ) {
        smallerChildIndex = this.getRightChildIndex(index); // Update to right child index
      }

      // If the current element is smaller than or equal to the smallest child, stop
      if (this.heap[index] <= this.heap[smallerChildIndex]) break;
      // Swap with the smaller child
      this.swap(index, smallerChildIndex);
      // Update index to the smaller child index
      index = smallerChildIndex;
    }
  }

  // Get the smallest element (root) without removing it
  peek() {
    return this.heap.length === 0 ? null : this.heap[0]; // Return root or null if empty
  }
}

// Define a class for MaxHeap, representing a maximum binary heap
class MaxHeap {
  constructor() {
    // Initialize the heap as an empty array
    this.heap = [];
  }

  // Get the parent index of the given index in the heap
  getParentIndex(index) {
    // Formula to calculate the parent index: (index - 1) / 2
    return Math.floor((index - 1) / 2);
  }

  // Get the left child index of the given index in the heap
  getLeftChildIndex(index) {
    // Formula to calculate the left child index: 2 * index + 1
    return 2 * index + 1;
  }

  // Get the right child index of the given index in the heap
  getRightChildIndex(index) {
    // Formula to calculate the right child index: 2 * index + 2
    return 2 * index + 2;
  }

  // Swap two elements in the heap by their indices
  swap(index1, index2) {
    // Destructure and swap the elements at index1 and index2
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  // Insert a new value into the heap
  insert(value) {
    // Push the new value to the end of the heap array
    this.heap.push(value);
    // Restore the heap property by moving the new value up
    this.heapifyUp();
  }

  // Restore the heap property by moving the last element up as necessary
  heapifyUp() {
    let index = this.heap.length - 1; // Start with the last element
    // While the current element is larger than its parent, swap them
    while (
      index > 0 &&
      this.heap[this.getParentIndex(index)] < this.heap[index]
    ) {
      this.swap(index, this.getParentIndex(index)); // Swap with parent
      index = this.getParentIndex(index); // Update index to parent's index
    }
  }

  // Remove and return the largest element (root) of the heap
  extractMax() {
    if (this.heap.length === 0) return null; // If heap is empty, return null
    if (this.heap.length === 1) return this.heap.pop(); // If one element, pop and return it
    // Store the maximum value (root)
    const max = this.heap[0];
    // Replace root with the last element
    this.heap[0] = this.heap.pop();
    // Restore heap property by moving the root down
    this.heapifyDown();
    // Return the maximum value
    return max;
  }

  // Restore the heap property by moving the root element down as necessary
  heapifyDown() {
    let index = 0; // Start with the root element
    // While there is at least a left child
    while (this.getLeftChildIndex(index) < this.heap.length) {
      // Assume left child is larger
      let largerChildIndex = this.getLeftChildIndex(index);
      // Check if right child exists and is larger than left child
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]
      ) {
        // Update to right child index
        largerChildIndex = this.getRightChildIndex(index);
      }

      // If the current element is larger than or equal to the largest child, stop
      if (this.heap[index] >= this.heap[largerChildIndex]) break;
      // Swap with the larger child
      this.swap(index, largerChildIndex);
      // Update index to the larger child index
      index = largerChildIndex;
    }
  }

  // Get the largest element (root) without removing it
  peek() {
    // Return root or null if empty
    return this.heap.length === 0 ? null : this.heap[0];
  }
}

// Export the MinHeap and MaxHeap classes as modules
module.exports = { MinHeap, MaxHeap };
