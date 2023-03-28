import User
import system
import product as p
mk = system.MkDelivery()

mk.add_product(p.Product("sushi","https:",20,"japan food","150","one"))
mk.add_product(p.Product("chicken","https:",50,"japan food","150","one"))
mk.add_product(p.Product("rice","https:",40,"thai food","150","two"))

mk.add_user(User.User("Ohm","0994448535","test@gmail.com","123456"))
mk.add_user(User.User("Tar","0945453453","tar@gmail.com","7654321"))

mk.user[0].create_cart_item(mk.getproduct("sushi"),2)


#search
#mk.search_product("rice")