
<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>this is just an automation test</i>
    <br>
    <br>
    <img src="https://github.com/cahuzacf/super_duper_umbrella/workflows/ci/badge.svg?branch=dev">
    <img src="https://img.shields.io/bundlephobia/minzip/super_duper_umbrella">
    <img src="https://img.shields.io/npm/dw/super_duper_umbrella">
    <img src="https://img.shields.io/github/commit-activity/w/garronej/super_duper_umbrella">
    <img src="https://img.shields.io/npm/l/super_duper_umbrella">
</p>
<p align="center">
  <a href="https://github.com/cahuzacf/super_duper_umbrella">Home</a>
  -
  <a href="https://github.com/cahuzacf/super_duper_umbrella">Documentation</a>
  -
  <a href="https://gitter.im/super_duper_umbrella/">Chat</a>
</p>

---

# Install / Import

## Node:

```bash
> npm install --save super_duper_umbrella
```
```typescript
import { myFunction, myObject } from 'super_duper_umbrella'; 
//OR to import a specific file:
import { myFunction } from 'super_duper_umbrella/myFunction'
import { myObject } from 'super_duper_umbrella/myObject'
```

## Deno:

For the latest version:   
```typescript
import { myFunction, myObject } from 'https://deno.land/x/super_duper_umbrella/mod.ts';
//OR importing specific file: 
import { myFunction } from 'https://deno.land/x/super_duper_umbrella/myFunction.ts';
import { myObject } from 'https://deno.land/x/super_duper_umbrella/myObject.ts';
```

To import a specific [release](https://github.com/cahuzacf/super_duper_umbrella/releases):  

```typescript
import { myFunction, myObject } from 'https://deno.land/x/super_duper_umbrella@0.1.0/mod.ts';
//OR
import { myFunction } from 'https://deno.land/x/super_duper_umbrella@0.1.0/myFunction.ts';
import { myObject } from 'https://deno.land/x/super_duper_umbrella@0.1.0/myObject.ts';
```


## CI

This repository has has continus integration and automatic publishing implemented via GitHub Action. 

Refer to [TEMPLATE_README.md](https://github.com/cahuzacf/super_duper_umbrella/blob/dev/TEMPLATE_README.md) for instructions. 


