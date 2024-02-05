package main

import "fmt"

func main(){
	var name string
	fmt.Print("Input your name : ")
	fmt.Scan(&name)

	var age int
	fmt.Print("input your age : ")
	fmt.Scan(&age)

	fmt.Print("My name is ",name," and my age is ",age)
	// fmt.Println(age)



}