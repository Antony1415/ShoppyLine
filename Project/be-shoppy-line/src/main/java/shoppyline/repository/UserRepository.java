package shoppyline.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import shoppyline.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // @Query("SELECT u FROM User u WHERE u.email = :email")
    public Optional<User> findByEmail(String email);
}
