package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "bonds")
public class Bond {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bondId;

    @Column(nullable = false)
    private String bondHolderName;

    @Column(nullable = false)
    private BigDecimal unitPrice;

    @Column(nullable = false)
    private BigDecimal couponPercent;

    @Column(nullable = false)
    private String bondCurrency;

    @Column(nullable = false)
    private String cusip;

    @Column(nullable = false)
    private Integer faceValueMn;

    @Column(nullable = false)
    private String isin;

    @Column(nullable = false)
    private String issuerName;

    @Column(nullable = false)
    private Timestamp bondMaturityDate;

    public Integer getBondId() {
        return bondId;
    }

    public void setBondId(Integer bondId) {
        this.bondId = bondId;
    }

    public String getBondHolderName() {
        return bondHolderName;
    }

    public void setBondHolderName(String bondHolderName) {
        this.bondHolderName = bondHolderName;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public BigDecimal getCouponPercent() {
        return couponPercent;
    }

    public void setCouponPercent(BigDecimal couponPercent) {
        this.couponPercent = couponPercent;
    }

    public String getBondCurrency() {
        return bondCurrency;
    }

    public void setBondCurrency(String bondCurrency) {
        this.bondCurrency = bondCurrency;
    }

    public String getCusip() {
        return cusip;
    }

    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    public Integer getFaceValueMn() {
        return faceValueMn;
    }

    public void setFaceValueMn(Integer faceValueMn) {
        this.faceValueMn = faceValueMn;
    }

    public String getIsin() {
        return isin;
    }

    public void setIsin(String isin) {
        this.isin = isin;
    }

    public String getIssuerName() {
        return issuerName;
    }

    public void setIssuerName(String issuerName) {
        this.issuerName = issuerName;
    }

    public Timestamp getBondMaturityDate() {
        return bondMaturityDate;
    }

    public void setBondMaturityDate(Timestamp bondMaturityDate) {
        this.bondMaturityDate = bondMaturityDate;
    }

    // Constructors, getters, setters, and other methods
}
