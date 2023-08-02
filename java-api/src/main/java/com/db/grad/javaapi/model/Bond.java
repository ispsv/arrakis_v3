package com.db.grad.javaapi.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
@Table(name = "bonds")
public class Bond {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bond_id")
    private Integer bondId;
    private BigDecimal unitPrice;

    private BigDecimal couponPercent;

    private String currency;

    private String cusip;

    private Integer faceValueMn;

    private String isin;

    private String issuerName;

    private Timestamp bondMaturityDate;

    public Integer getBondId() {
        return bondId;
    }

    public void setBondId(Integer bondId) {
        this.bondId = bondId;
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

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
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
}
