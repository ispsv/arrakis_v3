package com.db.grad.javaapi.model;

import javax.persistence.*;

@Entity
@Table(name = "bond_holders")
public class BondHolder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bond_holder_id")
    private Integer bondHolderId;

    private String name;

    public Integer getBondHolderId() {
        return bondHolderId;
    }

    public void setBondHolderId(Integer bondHolderId) {
        this.bondHolderId = bondHolderId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
