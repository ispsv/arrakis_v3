package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Integer userId) {
        if (userRepository.existsById(userId)) {
            return this.userRepository.getReferenceById(userId);
        } else {
            return null;
        }
    }

    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public Set<Book> getBookForUser(Integer userId) {
        if (userRepository.existsById(userId)) {
            return this.userRepository.findBooksByUserId(userId);
        } else {
            return null;
        }
    }
}
