
function enOrden(arr, ascendente = true){
    //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
    //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
    //Tu codigo:
    nuevoAr=[]
    for (let i = 0; i < arr.length; i++) {
            nuevoAr.push(0);
        
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < nuevoAr.length; j++) {
            if (arr[i]>nuevoAr[j]){
                nuevoAr[j-1]=nuevoAr[j]
                nuevoAr[j]=arr[i]
            }else{
                nuevoAr[j]=arr[i]
            }
        
    }
    }
    print(nuevoAr)
    return nuevoAr
}