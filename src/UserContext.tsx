import * as React from 'react';
import {AppUser} from './models';

export const UserContext = React.createContext<AppUser | undefined>(undefined);
