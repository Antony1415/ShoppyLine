package main

import "fmt"

func printKamu() int{
	fmt.Print("yak kamu beneran angka!");
	return 10;
}

func printDia() {
	fmt.Print("yak dia beneran wow!");
	
}

func main() {
	//output
	// fmt.Println("Hello world")
	// fmt.Println("haii")
	// fmt.Println("nasi makan")

	//variable 
	// var name string
	// name = "hallo bang"
	// fmt.Println(name)

	// age := 20
	// fmt.Println(age)
	
	
	// array
	// var myarray = [length]datatype{values} // An array
	
	//statis
	// var arr1 = [10]int{1,2,3,4,5,6,7,8,9,10}
	// arr2 := [3]string{"budi","wow","wiw"}

	//dinamis
	// var arr3 = [...]int{1,3,5,7,9,11}
	// var arr4 = [...]string{"hallo","kamu","yang","di","sana"}

	//bisa spesifikasi
	// var arr5 = [...]int{0:3,2:20}

	// fmt.Println(arr1)
	// fmt.Println(arr2)
	// fmt.Println(arr3)
	// fmt.Println(arr4)
	// fmt.Println(len(arr5)) -> ngambil panjang


	// slice
	// var myarray = [length]datatype{values} // An array
	// myslice := myarray[start:end] // A slice made from the array

	// var my = [5]int{1,2,3,5,4}
	// myslice := my[0:3]

	// myslice = append(myslice,6,7)

	// fmt.Println(myslice)
	// fmt.Println(len(myslice))
	// fmt.Println(cap(myslice))

	// condition if,else if,else -> sama kyk bhsa pemograman pada umumnya bedanya hrus struktural
	// if 10 < 9{
	// 	fmt.Println("Benar")
	// } else if 9 != 9{
	// 	fmt.Println("Salah")
	// } else{
	// 	fmt.Println("Bener Salah")
	// }

	// for loop -> sama sperti biasanya bedanya hanya ad range
	// for i:=0;i<10;i++{
	// 	fmt.Print(i+1," ")
	// }

	// fmt.Println("")

	// aq := [10]int{1,2,3,4,5,6,7,8,9,10}
	// for i,j:= range aq{ //i = index,j = value array
	// 	// fmt.Printf(j," ")
	// 	// fmt.Printf("%v\t%v\n",i,j)
	// 	fmt.Printf("%v\t%v\n",i,j)
	// }

	// fmt.Println("yak")
	// printKamu()
	// fmt.Println("")
	// printDia()

	var angka int
	angka=0
	// angka := 0
	fmt.Print("masukkan umur : ")
	fmt.Scan(&angka);

	if angka < 7{
		fmt.Print("masih kecil")
	} else if angka < 12{
		fmt.Print("masih remaja")
	} else{
		fmt.Print("masih dewasa")
	}

	

	






}
