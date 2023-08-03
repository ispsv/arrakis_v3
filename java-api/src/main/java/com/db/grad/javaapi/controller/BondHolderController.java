package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.BondHolder;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.service.BondHolderService;
import com.db.grad.javaapi.service.BondService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class BondHolderController {

    @Autowired
    BondHolderService bondHolderService;

    @Autowired
    BondHolderController(BondHolderService bondHolderService) {
        this.bondHolderService = bondHolderService;
    }

    @GetMapping("/bondholders")
    public List<BondHolder> getAllBondHolders() {
        return bondHolderService.getAllBondHolders();
    }

    @GetMapping("/bondholders/{id}")
    public ResponseEntity<BondHolder> getUser(@PathVariable(value = "id") Integer bondHolderId) {
        BondHolder bondHolder = bondHolderService.getBondHolderById(bondHolderId);
        return ResponseEntity.ok().body(bondHolder);
    }

    @PostMapping("/bondholders")
    public BondHolder createBondHolder(@Valid @RequestBody BondHolder bondHolder) {
        return bondHolderService.addBondHolder(bondHolder);
    }

    @DeleteMapping("/bondholders/{id}")
    public boolean deleteUser(@PathVariable(value = "id") Integer bondHolderId) {
        return bondHolderService.deleteBondHolderById(bondHolderId);
    }
}
