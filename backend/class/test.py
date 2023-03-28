import User
import product as p
mk = User.MkDelivery()

mk.add_product(p.Product("sushi","https:",20,"japan food","150","one"))
mk.add_product(p.Product("chicken","https:",50,"japan food","150","one"))
mk.add_product(p.Product("rice","https:",40,"thai food","150","two"))

mk.add_user(User.User("01","test@gmail.com"))
mk.add_user(User.User("02","number2@gmail.com"))

#mk.list_product()
mk.search_product("rice")