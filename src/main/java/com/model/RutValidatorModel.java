package com.model;

import java.io.Serializable;

public class RutValidatorModel implements Serializable {
    private int rut;
    private char dv;
    private boolean isValid;

    public RutValidatorModel(int rut, char dv) {
        super();
        this.rut = rut;
        this.dv = dv;

        this.isValid = this.validate();
    }

    private boolean validate() {
        return true;
    }

    public int getRut() {
        return rut;
    }

    public void setRut(int rut) {
        this.rut = rut;
    }

    public char getDv() {
        return dv;
    }

    public void setDv(char dv) {
        this.dv = dv;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }
}
