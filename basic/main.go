package main

import "fmt"

// func checkKey(temp map[string]int) bool{
// 	if(temp["avanza"]){
// 		return true
// 	}
// }

func main(){
	// num := []int{0,1,2,3,4,5,6,7,8,9,10}

	// for _,bers := range num{
	// 	if bers % 2 == 0{
	// 		fmt.Println(bers,"is even")
	// 	} else {
	// 		fmt.Println(bers,"is odd")
	// 	}
	// }

	var cars = map[string]int{
		"mbilio" : 1000000,
		"avanza" : 5000000,
	}

	cars["fortuner"] = 200000

	// var cek,err = cars["kijang"] // cek = value -> err = boolean

	

	// fmt.Println(cars["fortuner"])

	//lgsg dlem if kgk btuh penampung
	if cek,err := cars["kijang"]; err{
		fmt.Println("true",cek)
	} else{
		fmt.Println("false")
	}
	

	

	// for key,value:=range cars{
	// 	fmt.Println(key," : ",value)
	// }
	
	
}