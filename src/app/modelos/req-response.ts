export interface ReqResResponse {
    versions: ReqResResponseVersion[];
    id:       string;
    href:     string;
}

export interface ReqResResponseVersion {
    characteristics:        Characteristic[];
    productOfferingPrices?: ProductOfferingPrice[];
    name:                   string;
    id:                     string;
}

export interface Characteristic {
    versions: CharacteristicVersion[];
    id:       string;
}

export interface CharacteristicVersion {
    validFor:                ValidFor;
    valueType:               ValueType;
    name:                    string;
    id:                      string;
    type:                    Type;
    characteristicValues?:   CharacteristicValue[];
    properties?:             Property[];
    displayValue?:           string;
    value?:                  string;
    valueTypeSpecification?: ValueTypeSpecification;
}

export interface CharacteristicValue {
    displayValue: DisplayValue;
    isDefault:    boolean;
    validFor:     ValidFor;
    valueType:    ValueType;
    value:        string;
}

export enum DisplayValue {
    Active = "ACTIVE",
    Migrated = "MIGRATED",
    New = "NEW",
    Suspended = "SUSPENDED",
    Terminated = "TERMINATED",
    The0Meses = "0 Meses",
}

export interface ValidFor {
    startDateTime: Date;
}

export enum ValueType {
    Boolean = "Boolean",
    CodeTable = "CodeTable",
    Number = "Number",
    String = "String",
}

export interface Property {
    isSelected: boolean;
    value:      Value;
}

export enum Value {
    Conf = "CONF",
    Readonly = "READONLY",
    SaveToSR = "SaveToSR",
    TCRMFlag = "TCRMFlag",
}

export enum Type {
    InfoModelSystemAttribute = "infoModelSystemAttribute",
    InfoModelUserAttribute = "infoModelUserAttribute",
    LifeCycle = "lifeCycle",
    PscmSystemAttribute = "pscmSystemAttribute",
    PscmUserAttribute = "pscmUserAttribute",
}

export interface ValueTypeSpecification {
    id: ValueTypeSpecificationID;
}

export enum ValueTypeSpecificationID {
    ClaseImpuesto = "ClaseImpuesto",
    TipoPrecio = "TipoPrecio",
}

export interface ProductOfferingPrice {
    versions: ProductOfferingPriceVersion[];
    id:       PlaIDEnum;
}

export enum PlaIDEnum {
    CTTecPrecioBaseOTC = "CT_TecPrecioBaseOTC",
    CTTecPromocionFueraPrecioBaseOT = "CT_TecPromocionFueraPrecioBaseOT",
    CTTecPromocionPrecioBaseOTCD = "CT_TecPromocionPrecioBaseOTCD",
    CTTecTaxIVA = "CT_TecTaxIVA",
}

export interface ProductOfferingPriceVersion {
    characteristics?: Characteristic[];
    markup:           number;
    price:            Price;
    percentage:       number;
    name:             Name;
    id:               PlaIDEnum;
    plaId:            PlaIDEnum;
    popType:          PopType;
    frequency:        Frequency;
}

export enum Frequency {
    O = "O",
}

export enum Name {
    DescuentofueroPrecioBaseTecnologia = "DescuentofueroPrecioBaseTecnologia",
    IVATecnologia = "IVA Tecnologia",
    PrecioBaseTecnologia = "PrecioBaseTecnologia",
    PromocionPrecioBaseTecnologia = "PromocionPrecioBaseTecnologia",
}

export enum PopType {
    Discount = "Discount",
    ImpuestoIVA = "ImpuestoIVA",
    PrecioBaseOneTime = "PrecioBaseOne-Time",
    PrecioVentaOneTime = "PrecioVentaOne-Time",
}

export interface Price {
    amount: number;
    units:  Units;
}

export interface Units {
    code: Code;
    name: Code;
}

export enum Code {
    Cop = "COP",
}
