package Tree;

// package com.ds;// Binary Tree in Java

import java.util.ArrayList;

// creating a node that holds the data, address of the left child, and the address of the right child
class Node {
    int key;
    Node left, right;

    //setting data in the node
    public Node(int item) {
        key = item;
        //setting left and right child equal to NULL
        left = right = null;
    }
}

class BinaryTree {
    Node root;
    static ArrayList<Integer> arr = new ArrayList<Integer>();
    //set root NULL when the binary tree is created for the first time
    BinaryTree() {
        root = null;
    }

    static int HeightOfTree(Node root){
        if(root==null){
            return -1;
        }

        int lh = HeightOfTree(root.left);
        int rh = HeightOfTree(root.right);

        return 1 + Math.max(lh,rh);

    }

    public static ArrayList<Integer> preorderTraversal(Node A) {
        if(A == null){
            return null;
        }
        arr.add(A.key);
        preorderTraversal(A.left);
        preorderTraversal(A.right);

        return arr;
    }

    public static ArrayList<Integer> inorderTraversal(Node A) {
        if(A == null){
            return null;
        }
        inorderTraversal(A.left);
        arr.add(A.key);
        inorderTraversal(A.right);

        return arr;
    }

    public static ArrayList<Integer> postorderTraversal(Node A) {
        if(A == null){
            return null;
        }
        postorderTraversal(A.left);
        postorderTraversal(A.right);
        arr.add(A.key);

        return arr;
    }


    public static void main(String[] args) {

        //creating a new instance of Binary Tree
        BinaryTree tree = new BinaryTree();

        //inserting into the binary tree
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);

        tree.root.left.left = new Node(4);
        tree.root.left.right = new Node(5);

        tree.root.left.left.left = new Node(6);
        tree.root.left.left.right = new Node(7);

        System.out.print(HeightOfTree(tree.root));

        arr.clear();
        System.out.print(preorderTraversal(tree.root));

        arr.clear();
        System.out.print(inorderTraversal(tree.root));

        arr.clear();
        System.out.print(postorderTraversal(tree.root));
    }
}
