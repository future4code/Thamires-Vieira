import { performPurchase } from '../src/index'

describe("Teste - exercício 2", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Thamires",
            balance: 200
        }
    
        const result = performPurchase(user, 60)
        
        expect(result).toEqual({
            name: "Maria",
            balance: 80
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Alberta",
            balance: 40
        }
    
        const result = performPurchase(user, 40)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Joana",
            balance: 10
        }
    
        const result = performPurchase(user, 30)
        
        expect(result).not.toBeDefined()
    })

})
