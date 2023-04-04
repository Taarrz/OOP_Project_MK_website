from payment import*
from order import*

a1=Order(1,500,'CONFIRM','UNPAID',123334)
p1=Payment("UNPAID","12-5-55",456456,a1)
a1.cancel_order(456456)

print (a1._Status)