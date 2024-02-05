package main

import (
	"fmt"
	"strings"
)


func punyaHuruf(kata1 string,kata2 string) bool{
		var mep = map[string]int{}
		temp2 := strings.ToLower(kata2)
		temp1 := strings.ToLower(kata1)

		for i := 0; i < len(temp1); i++ {
			mep[string(temp1[i])]=0
		}
		cek := 0
		for i := 0; i < len(temp2); i++ {
			if _,err := mep[string(temp2[i])];err{
				cek++
			} 
		}
		

		if cek % len(temp1) == 0{
			return true
		} else {
			return false
		}
		
	
}

func main(){
	fmt.Println(punyaHuruf("cat","ANTARTICA"))

}

