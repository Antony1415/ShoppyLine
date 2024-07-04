package shoppyline.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shoppyline.dto.ProductRequestDto;
import shoppyline.model.Product;
import shoppyline.model.ProductImage;
import shoppyline.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Optional<Product> findByIdProduct(Long id) {
        return productRepository.findById(id);
    }

    public Product createProduct(ProductRequestDto request) {
        Product newProduct = new Product();
        newProduct.setDescription(request.getDescription());
        newProduct.setName(request.getName());
        newProduct.setPrice(request.getPrice());

        return productRepository.save(newProduct);
    }

    public Optional<Product> updateProduct(Long id, ProductRequestDto request) {
        Optional<Product> findByIdProduct = findByIdProduct(Long.valueOf(id));
        if(findByIdProduct.isEmpty()) {
            return Optional.empty();
        }

        Product product = findByIdProduct.get();
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setPrice(request.getPrice());

        List<ProductImage> productImages = new ArrayList<>();
        for (String image : request.getImages()) {
            ProductImage productImage = new ProductImage();
            productImage.setImage(image);
            productImage.setProduct(findByIdProduct.get());
            productImages.add(productImage);
        }
        product.getProductImage().clear();
        product.getProductImage().addAll(productImages);
        
        return Optional.ofNullable(productRepository.save(product));
    }
}
