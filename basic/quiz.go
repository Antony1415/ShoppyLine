package main

import "fmt"

type shape interface {
	getArea() float64
}

type triangle struct {
	base   float64
	height float64
}
type square struct {
	sideLength float64
}

func (t triangle) getArea() float64 {
	return 0.5 * t.base * t.height
}

func (s square) getArea() float64 {
	return s.sideLength * s.sideLength
}

func printArea(sh shape){
	fmt.Println(sh.getArea())
}

func main() {
	s := square{10}
	t := triangle{10, 10}

	printArea(s)
	printArea(t)

	
}