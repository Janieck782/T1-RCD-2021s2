package com.model;

import java.io.Serializable;

public class RutValidatorModel implements Serializable {
    private int rut;
    private char dv;
    private final boolean isValid;

    public RutValidatorModel(int rut, char dv) {
        super();
        this.rut = rut;
        this.dv = dv;

        this.isValid = this.validate();
    }

    private boolean validate() {
        int rutAux = this.rut;
        int m = 0, s = 1;

        for (; rutAux != 0; rutAux /= 10) {
            s = (s + rutAux % 10 * (9 - m++ % 6)) % 11;
        }

        return this.dv == (char) (s != 0 ? s + 47 : 75);
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
}
