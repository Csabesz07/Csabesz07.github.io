import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const languageControlGuard: CanActivateFn = (route, state) => {
  const lang = route.queryParamMap.get('lang');
  const router: Router = inject(Router);

  if(lang)
  {
    return true;
  } else {
    return router.createUrlTree(['/language'], {queryParams: {redirectUrl: route.url}});
  }
};
