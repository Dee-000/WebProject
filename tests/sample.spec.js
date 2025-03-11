import { test, expect } from '@playwright/test';
import {pei1, pei2} from './util/pei'

test('PEI.TC01', async ({ page }) => {
  pei1();
  console.log (pei1());
  // pei2();
  // console.log (pei2());
  await expect(pei1).toEqual('PEI01');
});