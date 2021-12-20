const initiativesSheetIndex = 1

// For db mapping
const initiativeTypeOne = "Green Food"
const initiativeTypeTwo = "Recycling"

const mapper = {
    Description: 'description',
    Email: 'email',
    Image: 'src',
    Link: 'link',
    Timestamp: 'timestamp',
    Title: 'title',
    Type: 'type',
    _rawData: 'rawData',
    _rowNumber: 'rowNumber',
}

export { initiativesSheetIndex, initiativeTypeOne, initiativeTypeTwo, mapper }