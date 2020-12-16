function add(x: number, y: number, z?: number): number {
  if(z) {
    return x + y + z
  } else {
    return x + y
  }
}

add(1, 2, 3)

let add2: (x: number, y: number, z?: number) => number = add

interface ISum {
  (x: number, y: number, z?: number): number;
}

let add3: ISum = add
