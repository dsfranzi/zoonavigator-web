/*
 * Copyright (C) 2017  Ľuboš Kozmon
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Component, Input, EventEmitter, Output} from "@angular/core";
import {ZNode} from "../znode";
import {ZPath} from "../zpath";

@Component({
  selector: "zoo-editor-nav-list",
  templateUrl: "nav-list.component.html",
  styleUrls: ["nav-list.component.scss"]
})
export class NavListComponent {

  @Output() select: EventEmitter<ZNode> = new EventEmitter();
  @Output() deselect: EventEmitter<ZNode> = new EventEmitter();

  @Input() zPath: ZPath;
  @Input() zNodes: ZNode[];
  @Input() zNodesSelected: ZNode[];

  onNodeChecked(zNode: ZNode): void {
    this.select.emit(zNode);
  }

  onNodeUnchecked(zNode: ZNode): void {
    this.deselect.emit(zNode);
  }

  //noinspection JSMethodCanBeStatic,JSUnusedLocalSymbols
  trackByPath(index: number, zNode: ZNode): string {
    return zNode.path;
  }
}
