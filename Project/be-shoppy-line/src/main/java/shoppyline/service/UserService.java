package shoppyline.service;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import shoppyline.dto.LoginRequestDto;
import shoppyline.dto.RegisterRequestDto;
import shoppyline.model.User;
import shoppyline.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(
                        () -> new UsernameNotFoundException(String.format("User with email '%s' not found", email)));
    }

    public User register(RegisterRequestDto user) {
        boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
        if (userExists) {
            throw new UsernameNotFoundException(String.format("User with email '%s' already exists", user.getEmail()));
        }

        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        User newUser = new User(user.getFullName(), user.getEmail(), user.getPassword(), user.getUserImage(), user.getRole());
        return userRepository.save(newUser);
    }

    public UserDetails login(LoginRequestDto request) throws Exception {
        UserDetails user = loadUserByUsername(request.getEmail());
        if(!bCryptPasswordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadRequestException("Wrong Password, Please Try Again!");
        }
        return user;
    }
}
