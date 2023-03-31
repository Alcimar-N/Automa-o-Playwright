import { test, expect } from '@playwright/test';
import { Classe } from '../pages/metodos';

test.describe('Verificar carrinho', () => {
    let umaClasse: Classe

    test.beforeEach(async ({ page }) => {
        // Roda antes da cada teste
        umaClasse = new Classe(page)
        await page.goto('https://www.saucedemo.com/');
        await umaClasse.loginValido('standard_user','secret_sauce')
    });
    test.afterEach(async ({ page }) => {
        //roda depois de cada teste
        await page.close()
    });

    test('adicionar item no carrinho', async ({page}) => {
        const variavel = new Classe(page)
        await variavel.AddProduto()
    })

    test('acessar carrinho', async ({page}) => {
        const variavel = new Classe(page)
        await variavel.AcessaCarrinho()
        

    })


    test('remover item do carrinho', async ({page}) => {
        const varial = new Classe(page)
        await varial.AddProduto()
        await varial.RemoveItem()
        
    })

})