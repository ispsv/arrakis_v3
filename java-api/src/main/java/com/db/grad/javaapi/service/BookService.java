package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book getBookById(Integer bookId) {
        if (this.bookRepository.existsById(bookId)) {
            return this.bookRepository.getReferenceById(bookId);
        } else {
            return null;
        }
    }

    public List<Book> getAllBooks() {
        return this.bookRepository.findAll();
    }

    public Set<User> getBookForUser(Integer bookId) {
        if (this.bookRepository.existsById(bookId)) {
            return this.bookRepository.findUsersByBookId(bookId);
        } else {
            return null;
        }
    }
}
