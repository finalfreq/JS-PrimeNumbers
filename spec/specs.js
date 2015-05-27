describe("primeNumbers", function() {
  it("will return all the prime numbers less than the given number", function() {
    expect(primeNumbers(7)).to.eql([2,3,5,7])
    expect(primeNumbers(133).length).to.equal(32)
    expect(primeNumbers(3571).length).to.equal(500)
  })

});
