package com.Devops.ListOfProduct.Repo;

import com.Devops.ListOfProduct.Entites.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
