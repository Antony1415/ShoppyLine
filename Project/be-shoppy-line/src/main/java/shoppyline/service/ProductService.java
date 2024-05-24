package shoppyline.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shoppyline.dto.ProductRequestDto;
import shoppyline.model.Product;
import shoppyline.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(ProductRequestDto request) {
        Product newProduct = new Product(request.getName(), request.getDescription(), request.getPrice());
        return productRepository.save(newProduct);
    }
}
