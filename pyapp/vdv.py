
def funcion_vdv(pe,dv):
    mult = 2
    num = pe
    suma = 0
    dig = 0
    if (dv=="k"):
        dv=int(10)
    else:
        dv = int(dv)
    while(num > 0):
        dig = int(num % 10)
        suma+=dig*mult
        num=int(num/10)
        if(mult != 7):
            mult+=1
        else:
            mult= 2
    res=11-(suma%11)
    if(res == dv):
        return 1
    else:
        return 0