import product as p

palo = p.Product("เปาครีมทอด","",65,"salapow so good","80 Cal","ของทานเล่น")
bamii = p.Product("บะหมี่หยกเป็ดย่าง","",102,"best seller","160 Cal","เส้น")
mutod = p.Product("หมูทอด","",89,"best seller","75 Cal","ทอด")

palo_items = p.Cart_item(palo,2)
bamii_items = p.Cart_item(bamii,3)
mutod_items = p.Cart_item(mutod,15)

cart = p.Cart()
cart.add_cart_item(palo_items)
cart.add_cart_item(bamii_items)
cart.add_cart_item(mutod_items)

cart.show_cart()