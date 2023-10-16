package com.Devops.ListOfProduct.Controlllers;

import com.Devops.ListOfProduct.Entites.Product;
import com.Devops.ListOfProduct.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/list")
    public List<Product> listProducts() {
        return productService.getAllProducts();
    }

    // Add other endpoints as needed
}

